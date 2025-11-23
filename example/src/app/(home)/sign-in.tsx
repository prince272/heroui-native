import { Button, TextField, Card, Surface, cn, Divider } from 'heroui-native';
import { View, Text, Pressable } from 'react-native';
import { ScreenScrollView } from '../../components/screen-scroll-view';
import { useAppTheme } from '../../contexts/app-theme-context';
import { Ionicons } from '@expo/vector-icons';
import { withUniwind } from 'uniwind';
import React from 'react';

const StyledIcons = withUniwind(Ionicons);

export default function SignInScreen() {
  const { isDark } = useAppTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign in with:', { email, password });
    }, 2000);
  };

  const canSubmit = email.length > 0 && password.length > 0;

  return (
    <ScreenScrollView contentContainerClassName="px-4 py-8">
      <View className="flex-1 justify-center items-center">
        <View className="w-full max-w-[400px]">
          {/* Header */}
          <View className="mb-8 items-center">
            <View className="w-16 h-16 bg-accent rounded-full items-center justify-center mb-4">
              <StyledIcons name="lock-closed" size={32} className="text-accent-foreground" />
            </View>
            <Text className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </Text>
            <Text className="text-base text-muted text-center">
              Sign in to your account to continue
            </Text>
          </View>

          {/* Sign In Card */}
          <Surface className="rounded-2xl overflow-hidden">
            <Card>
              <Card.Body className="gap-6 p-6">
                {/* Email Field */}
                <TextField isRequired>
                  <TextField.Label>Email</TextField.Label>
                  <TextField.Input
                    placeholder="name@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    editable={!isLoading}
                  >
                    <TextField.InputStartContent>
                      <StyledIcons
                        name="mail-outline"
                        size={20}
                        className="text-muted"
                      />
                    </TextField.InputStartContent>
                  </TextField.Input>
                </TextField>

                {/* Password Field */}
                <TextField isRequired>
                  <TextField.Label>Password</TextField.Label>
                  <TextField.Input
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    editable={!isLoading}
                  >
                    <TextField.InputStartContent>
                      <StyledIcons
                        name="lock-closed-outline"
                        size={20}
                        className="text-muted"
                      />
                    </TextField.InputStartContent>
                    <TextField.InputEndContent>
                      <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        className="p-1"
                      >
                        <StyledIcons
                          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                          size={20}
                          className="text-muted"
                        />
                      </Pressable>
                    </TextField.InputEndContent>
                  </TextField.Input>
                </TextField>

                {/* Forgot Password Link */}
                <Pressable className="self-end">
                  <Text className="text-accent text-sm font-medium">
                    Forgot Password?
                  </Text>
                </Pressable>

                {/* Sign In Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onPress={handleSignIn}
                  isDisabled={!canSubmit || isLoading}
                  isLoading={isLoading}
                >
                  Sign In
                </Button>

                {/* Divider with "OR" */}
                <View className="flex-row items-center gap-4 my-2">
                  <Divider className="flex-1" />
                  <Text className="text-muted text-sm">OR</Text>
                  <Divider className="flex-1" />
                </View>

                {/* Social Sign In Buttons */}
                <View className="gap-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    isDisabled={isLoading}
                  >
                    <StyledIcons
                      name="logo-google"
                      size={20}
                      className="text-foreground mr-2"
                    />
                    Continue with Google
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    isDisabled={isLoading}
                  >
                    <StyledIcons
                      name="logo-apple"
                      size={20}
                      className="text-foreground mr-2"
                    />
                    Continue with Apple
                  </Button>
                </View>
              </Card.Body>
            </Card>
          </Surface>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center mt-6 gap-2">
            <Text className="text-muted text-base">
              Don't have an account?
            </Text>
            <Pressable>
              <Text className="text-accent text-base font-semibold">
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenScrollView>
  );
}
